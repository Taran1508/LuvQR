import connectDB from '@/lib/config/db';
import Message from '@/lib/models/messageModel';

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  console.log('Received Data:', body);

  if (!body.message || body.message.trim() === '') {
    return new Response(JSON.stringify({ error: 'Message is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  console.log(body.message);
  const newMessage = new Message({ message: body.message });
  console.log('Saving to DB:', newMessage); // Debugging

  try {
    const savedMessage = await newMessage.save();
    console.log('Saved Successfully:', savedMessage); // Debugging
    return new Response(
      JSON.stringify({ message: 'Message added', data: savedMessage }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('DB Save Error:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
