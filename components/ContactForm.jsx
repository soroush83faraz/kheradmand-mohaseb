'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' });

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    const body = [
      `نام: ${form.name}`,
      `شرکت: ${form.company}`,
      `تلفن: ${form.phone}`,
      '',
      form.message,
    ].join('\n');
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      'درخواست مشاوره — ' + (form.company || form.name)
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        نام و نام خانوادگی
        <input required value={form.name} onChange={update('name')} autoComplete="name" />
      </label>
      <label>
        نام شرکت
        <input value={form.company} onChange={update('company')} autoComplete="organization" />
      </label>
      <label>
        شماره تماس
        <input
          required
          type="tel"
          dir="ltr"
          value={form.phone}
          onChange={update('phone')}
          autoComplete="tel"
        />
      </label>
      <label>
        توضیح کوتاه درباره نیازتان
        <textarea rows={5} value={form.message} onChange={update('message')} />
      </label>
      <button className="btn btn-solid" type="submit">
        ارسال درخواست
      </button>
      <p className="hint">
        با ارسال فرم، برنامه ایمیل شما با متن آماده باز می‌شود.
        {site.phone ? (
          <>
            {' '}می‌توانید مستقیم هم تماس بگیرید: <span className="ltr-num">{site.phone}</span>
          </>
        ) : null}
      </p>
    </form>
  );
}
