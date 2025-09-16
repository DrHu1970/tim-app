'use client';
type Props = { value?: number; onChange?: (v:number)=>void; };
export default function Radio7({ value, onChange }: Props) {
  return (
    <div style={{display:'flex', gap:8}}>
      {[1,2,3,4,5,6,7].map(n => (
        <label key={n} style={{display:'flex', alignItems:'center', gap:4}}>
          <input type="radio" name="r7" checked={value===n} onChange={()=>onChange?.(n)} />
          {n}
        </label>
      ))}
    </div>
  );
}
