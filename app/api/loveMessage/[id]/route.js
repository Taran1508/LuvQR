import connectDB from '@/lib/config/db';
import Message from '@/lib/models/messageModel';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(request, { params }) {
  await connectDB();

  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new NextResponse(JSON.stringify({ error: 'Invalid Message ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const fetchedMessage = await Message.findById(id);

    if (!fetchedMessage) {
      return new NextResponse(JSON.stringify({ error: 'Message not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse(
      JSON.stringify({ message: fetchedMessage.message }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Database error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
