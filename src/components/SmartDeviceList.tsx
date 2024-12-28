import { useState } from 'react';
import { Lightbulb, Tv, Wind, Flame, Edit2, X, Check, Plus } from 'lucide-react';
import { SmartDevice } from '../types';
import { Switch } from '@headlessui/react';

interface Props {
  devices: SmartDevice[];
  onToggleDevice: (deviceId: string) => void;
  onUpdateDevicePower: (deviceId: string, newPower: number) => void;
  onAddDevice: (device: Omit<SmartDevice, 'id'>) => void;
  title: string;
  wattsLabel: string;
  translations: {
    editPower: string;
    savePower: string;
    cancel: string;
    powerPlaceholder: string;
    invalidPower: string;
    invalidName: string;
    addDevice: string;
    deviceName: string;
    deviceType: string;
    devicePower: string;
    addNewDevice: string;
    namePlaceholder: string;
    selectType: string;
    deviceTypes: {
      light: string;
      ac: string;
      tv: string;
      heater: string;
      other: string;
    };
  };
}

interface EditingState {
  deviceId: string | null;
  power: string;
  error: string;
}

interface NewDeviceForm {
  name: string;
  type: SmartDevice['type'];
  power: string;
}

const getDeviceIcon = (type: SmartDevice['type']) => {
  switch (type) {
    case 'light':
      return <Lightbulb className="w-6 h-6" />;
    case 'tv':
      return <Tv className="w-6 h-6" />;
    case 'ac':
      return <Wind className="w-6 h-6" />;
    case 'heater':
      return <Flame className="w-6 h-6" />;
    default:
      return <Lightbulb className="w-6 h-6" />;
  }
};

export const SmartDeviceList = ({ 
  devices, 
  onToggleDevice, 
  onUpdateDevicePower,
  onAddDevice,
  title, 
  wattsLabel,
  translations 
}: Props) => {
  const [editing, setEditing] = useState<EditingState>({
    deviceId: null,
    power: '',
    error: ''
  });

  const [isAddingDevice, setIsAddingDevice] = useState(false);
  const [newDevice, setNewDevice] = useState<NewDeviceForm>({
    name: '',
    type: 'other',
    power: ''
  });
  const [addError, setAddError] = useState('');

  const handleEditStart = (device: SmartDevice) => {
    setEditing({
      deviceId: device.id,
      power: device.consumption.toString(),
      error: ''
    });
  };

  const handleEditCancel = () => {
    setEditing({
      deviceId: null,
      power: '',
      error: ''
    });
  };

  const handlePowerChange = (value: string) => {
    setEditing(prev => ({
      ...prev,
      power: value,
      error: ''
    }));
  };

  const handleSavePower = (deviceId: string) => {
    const power = parseInt(editing.power);
    if (isNaN(power) || power <= 0) {
      setEditing(prev => ({
        ...prev,
        error: translations.invalidPower
      }));
      return;
    }
    onUpdateDevicePower(deviceId, power);
    handleEditCancel();
  };

  const handleAddDevice = () => {
    setAddError('');
    const power = parseInt(newDevice.power);
    
    if (!newDevice.name.trim()) {
      setAddError(translations.invalidName);
      return;
    }
    
    if (isNaN(power) || power <= 0) {
      setAddError(translations.invalidPower);
      return;
    }
    
    onAddDevice({
      name: newDevice.name.trim(),
      type: newDevice.type,
      consumption: power,
      isOn: false
    });
    
    setIsAddingDevice(false);
    setNewDevice({ name: '', type: 'other', power: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold dark:text-white">{title}</h2>
        <button
          onClick={() => setIsAddingDevice(true)}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          {translations.addDevice}
        </button>
      </div>

      {isAddingDevice && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations.deviceName}
              </label>
              <input
                type="text"
                value={newDevice.name}
                onChange={(e) => setNewDevice(prev => ({ ...prev, name: e.target.value }))}
                placeholder={translations.namePlaceholder}
                className="w-full px-3 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations.deviceType}
              </label>
              <select
                value={newDevice.type}
                onChange={(e) => setNewDevice(prev => ({ ...prev, type: e.target.value as SmartDevice['type'] }))}
                className="w-full px-3 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              >
                <option value="light">{translations.deviceTypes.light}</option>
                <option value="ac">{translations.deviceTypes.ac}</option>
                <option value="tv">{translations.deviceTypes.tv}</option>
                <option value="heater">{translations.deviceTypes.heater}</option>
                <option value="other">{translations.deviceTypes.other}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations.devicePower}
              </label>
              <input
                type="number"
                value={newDevice.power}
                onChange={(e) => setNewDevice(prev => ({ ...prev, power: e.target.value }))}
                placeholder={translations.powerPlaceholder}
                className="w-full px-3 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                onClick={handleAddDevice}
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
              >
                {translations.addNewDevice}
              </button>
              <button
                onClick={() => {
                  setIsAddingDevice(false);
                  setNewDevice({ name: '', type: 'other', power: '' });
                  setAddError('');
                }}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                {translations.cancel}
              </button>
            </div>
          </div>
          {addError && (
            <p className="mt-2 text-sm text-red-500">{addError}</p>
          )}
        </div>
      )}

      <div className="space-y-2 sm:space-y-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className={`text-primary-600 dark:text-primary-400 ${device.isOn ? 'opacity-100' : 'opacity-50'}`}>
                <div className="w-5 h-5 sm:w-6 sm:h-6">{getDeviceIcon(device.type)}</div>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-medium dark:text-white">{device.name}</h3>
                {editing.deviceId === device.id ? (
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="number"
                      value={editing.power}
                      onChange={(e) => handlePowerChange(e.target.value)}
                      className="w-24 px-2 py-1 text-xs rounded border dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                      placeholder={translations.powerPlaceholder}
                    />
                    <button
                      onClick={() => handleSavePower(device.id)}
                      className="p-1 text-green-600 hover:text-green-700 dark:text-green-400"
                      title={translations.savePower}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="p-1 text-red-600 hover:text-red-700 dark:text-red-400"
                      title={translations.cancel}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {device.consumption}{wattsLabel}
                    </p>
                    <button
                      onClick={() => handleEditStart(device)}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title={translations.editPower}
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                  </div>
                )}
                {editing.deviceId === device.id && editing.error && (
                  <p className="text-xs text-red-500 mt-1">{editing.error}</p>
                )}
              </div>
            </div>
            <Switch
              checked={device.isOn}
              onChange={() => onToggleDevice(device.id)}
              className={`${
                device.isOn ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  device.isOn ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>
    </div>
  );
}; 