import Link from 'next/link';
import { LoginForm } from './login-form';

export const metadata = { title: 'TEXANCS Login' };

export default function LoginPage() {
  return (
    <div className="login-wrap">
      <div className="login-card">
        <h1>TEXANCS</h1>
        <div className="sub">Sign in to your secure firm portal</div>
        <LoginForm />
        <div className="demo-creds">
          <Link href="/">Back to Texan Core Solutions</Link>
        </div>
      </div>
    </div>
  );
}
