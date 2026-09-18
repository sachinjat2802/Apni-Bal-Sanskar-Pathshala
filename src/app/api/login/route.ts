import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Use environment variables for credentials, with fallback if not set
    const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
    const expectedPassword = process.env.ADMIN_PASSWORD || 'password123'; // Don't use 'password' as fallback just to be slightly safer

    if (username === expectedUsername && password === expectedPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Bad request' }, { status: 400 });
  }
}
