import bcrypt from 'bcryptjs';
import prismadb from 'lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const { username, email, password } = await request.json();

    if
}
   