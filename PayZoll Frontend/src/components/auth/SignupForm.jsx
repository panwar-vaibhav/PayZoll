import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Lock, Eye, EyeOff, Building2 } from 'lucide-react';
import FormInput from './FormInput';
import PasswordStrength from './PasswordStrength';

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const onSubmit = (data) => {
    console.log(data);
    // Handle employer signup logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <FormInput
        label="Company Name"
        type="text"
        placeholder="Enter company name"
        icon={<Building2 className="w-5 h-5" />}
        error={errors.companyName}
        {...register('companyName', {
          required: 'Company name is required',
          minLength: {
            value: 2,
            message: 'Company name must be at least 2 characters'
          }
        })}
      />

      <FormInput
        label="Business Email"
        type="email"
        placeholder="Enter company email"
        icon={<Mail className="w-5 h-5" />}
        error={errors.email}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
      />

      <div className="space-y-2">
        <FormInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Create a password"
          icon={<Lock className="w-5 h-5" />}
          error={errors.password}
          endIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />
        <PasswordStrength password={password} />
      </div>

      <FormInput
        label="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Confirm your password"
        icon={<Lock className="w-5 h-5" />}
        error={errors.confirmPassword}
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: value => value === password || 'Passwords do not match'
        })}
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl
                 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200 flex items-center justify-center"
      >
        Create Employer Account
      </button>

      <p className="text-sm text-gray-400 text-center">
        By signing up, you agree to our{' '}
        <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a>
        {' '}and{' '}
        <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
      </p>
    </form>
  );
}

export default SignupForm;