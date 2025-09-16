'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const email = data.user?.email ?? null;
      setUserEmail(email);
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {!userEmail && <p className="note">Nicht eingeloggt. <a href="/login">Zum Login</a></p>}
      {userEmail && (
        <div className="card">
          <strong>Eingeloggt als:</strong> {userEmail}
          <p className="note">Sobald Memberships/Org gesetzt sind, können hier Auswertungen (Zeitreihe/Heatmap) erscheinen.</p>
        </div>
      )}
    </div>
  );
}
