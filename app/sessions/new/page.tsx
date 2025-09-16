'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Template = { id: string; name: string; };

export default function NewSession() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templateId, setTemplateId] = useState('');
  const [period, setPeriod] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [note, setNote] = useState('');
  const [orgId, setOrgId] = useState(''); // TODO: set from membership

  useEffect(() => {
    // NOTE: RLS will block unless the logged user has a membership for the org.
    supabase.from('templates').select('id,name').then(({ data, error }) => {
      if (error) console.error(error);
      if (data) setTemplates(data);
    });
  }, []);

  async function createSession() {
    if (!templateId || !period) { alert('Bitte Template und Zeitraum/Periode angeben'); return; }
    const { data, error } = await supabase.from('sessions').insert({
      organization_id: orgId || null, // if empty, DB will reject due to FK; in pilot, set org manually in DB
      template_id: templateId,
      period: period,
      date_from: dateFrom || null,
      date_to: dateTo || null,
      notes: note || null
    }).select().single();
    if (error) { alert(error.message); return; }
    window.location.href = `/sessions/${data.id}`;
  }

  return (
    <div>
      <h2>Session anlegen</h2>
      <div className="grid">
        <label>Template</label>
        <select value={templateId} onChange={e => setTemplateId(e.target.value)}>
          <option value="">– wählen –</option>
          {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>

        <label>Periode (z. B. „KW 38–40“)</label>
        <input value={period} onChange={e => setPeriod(e.target.value)} />

        <div className="grid grid-2">
          <div>
            <label>Von (optional)</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
          </div>
          <div>
            <label>Bis (optional)</label>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} />
          </div>
        </div>

        <label>Notiz (optional)</label>
        <textarea rows={3} value={note} onChange={e => setNote(e.target.value)} />

        <button onClick={createSession}>Anlegen</button>
        <p className="note">Hinweis: In der Pilotphase muss die <code>organization_id</code> ggf. direkt in der DB gesetzt werden oder via Membership ermittelt werden.</p>
      </div>
    </div>
  );
}
