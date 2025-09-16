'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function SessionDetail() {
  const params = useParams();
  const sessionId = params?.sessionId as string;
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    if (!sessionId) return;
    supabase.from('sessions').select('*').eq('id', sessionId).single().then(({ data, error }) => {
      if (error) console.error(error);
      setSession(data);
    });
  }, [sessionId]);

  if (!session) return <p>Lade…</p>;
  return (
    <div>
      <h2>Session</h2>
      <div className="card">
        <div><strong>Periode:</strong> {session.period}</div>
        <div><strong>Von:</strong> {session.date_from || '–'} | <strong>Bis:</strong> {session.date_to || '–'}</div>
        <div><strong>Notiz:</strong> {session.notes || '–'}</div>
      </div>
      <p className="note">Hier folgen: Teilnehmer-Status, Erfassungs-Links, Auswertung.</p>
    </div>
  );
}
