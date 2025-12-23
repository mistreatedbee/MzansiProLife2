import { useState, useRef, type ReactNode, type ChangeEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Upload, X, FileText } from 'lucide-react';
import { base44 } from '@/api/base44Client';

type ChangeFn = (name: string, value: any) => void;

interface TextFieldProps {
  label: ReactNode;
  name: string;
  value?: any;
  onChange: ChangeFn;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

export function TextField({ label, name, value, onChange, placeholder = '', required = false, type = 'text' }: TextFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value || ''}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
      />
    </div>
  );
}

interface TextAreaFieldProps {
  label: ReactNode;
  name: string;
  value?: any;
  onChange: ChangeFn;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export function TextAreaField({ label, name, value, onChange, placeholder = '', required = false, rows = 4 }: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Textarea
        id={name}
        name={name}
        value={value || ''}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: ReactNode;
  name: string;
  value?: any;
  onChange: ChangeFn;
  options: { value: string; label: React.ReactNode }[];
  placeholder?: string;
  required?: boolean;
}

export function SelectField({ label, name, value, onChange, options, placeholder = '', required = false }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Select value={value || ''} onValueChange={(val) => onChange(name, val)}>
        <SelectTrigger className="rounded-xl border-gray-200">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

interface CheckboxGroupProps {
  label: ReactNode;
  name: string;
  value?: any[];
  onChange: ChangeFn;
  options: { value: string; label: React.ReactNode }[];
  required?: boolean;
}

export function CheckboxGroup({ label, name, value = [], onChange, options, required = false }: CheckboxGroupProps) {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange(name, [...value, optionValue]);
    } else {
      onChange(name, value.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center space-x-2">
            <Checkbox
              id={`${name}-${opt.value}`}
              checked={value.includes(opt.value)}
              onCheckedChange={(checked: boolean) => handleChange(opt.value, checked)}
              className="border-gray-300 data-[state=checked]:bg-green-600"
            />
            <label
              htmlFor={`${name}-${opt.value}`}
              className="text-sm text-gray-700 cursor-pointer"
            >
              {opt.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FileUploadFieldProps {
  label: ReactNode;
  name: string;
  value?: any;
  onChange: ChangeFn;
  required?: boolean;
  accept?: string;
}

export function FileUploadField({ label, name, value, onChange, required = false, accept = '*/*' }: FileUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setFileName(file.name);

    try {
      const { file_url } = await (base44 as any).integrations.Core.UploadFile({ file });
      onChange(name, file_url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const clearFile = () => {
    onChange(name, '');
    setFileName('');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      <Label className="text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      
      {value ? (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
          <FileText className="w-5 h-5 text-green-600" />
          <span className="flex-1 text-sm text-gray-700 truncate">{fileName || 'File uploaded'}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clearFile}
            className="h-8 w-8 text-gray-400 hover:text-red-500"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-green-400 hover:bg-green-50/50 transition-colors ${
            uploading ? 'opacity-50 pointer-events-none' : ''
          }`}
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            {uploading ? 'Uploading...' : 'Click to upload file'}
          </p>
          <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG up to 10MB</p>
        </div>
      )}
      
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}