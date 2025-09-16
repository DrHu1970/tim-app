'use client';
import { supabase } from '@/lib/supabase';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect, useState } from 'react';

export default function Login() {
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUrl(window.location.origin + '/dashboard');
    }
  }, []);

  return (
    <div className="card">
      <h2>Login</h2>
      <p className="note">Nutze E-Mail (Magic Link). Nach Login wirst du ins Dashboard geleitet.</p>
      <Auth
        supabaseClient={supabase}
        providers={[]}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        localization={{ variables: { sign_in: { email_label: 'E-Mail' } } }}
        redirectTo={redirectUrl}
      />
    </div>
  );
}
