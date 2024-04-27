import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './AuthContext';

describe('AuthContext', () => {
  it('should provide the correct initial context values', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.loginPopupVisible).toBe(false);
    expect(typeof result.current.openLoginPopup).toBe('function');
    expect(typeof result.current.closeLoginPopup).toBe('function');
  });

  it('should toggle login popup visibility correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.openLoginPopup();
    });
    expect(result.current.loginPopupVisible).toBe(true);

    act(() => {
      result.current.closeLoginPopup();
    });
    expect(result.current.loginPopupVisible).toBe(false);
  });

  it('should toggle register popup visibility correctly if provided', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.openRegisterPopup();
    });
    expect(result.current.registerPopupVisible).toBe(true);

    act(() => {
      result.current.closeRegisterPopup();
    });
    expect(result.current.registerPopupVisible).toBe(false);
  });
});