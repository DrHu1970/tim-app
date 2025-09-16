export default function Home() {
  return (
    <div>
      <h1>TIM – Supervisions-Erfassung (MVP)</h1>
      <p>Willkommen. Bitte erst <strong>login</strong>, dann Sessions anlegen und auswerten.</p>
      <ul>
        <li>➜ <a href="/login">Login</a></li>
        <li>➜ <a href="/sessions/new">Session anlegen</a></li>
        <li>➜ <a href="/dashboard">Dashboard</a></li>
      </ul>
    </div>
  );
}
