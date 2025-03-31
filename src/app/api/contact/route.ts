import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Логируем данные в консоль
    console.log('Form submission:', data);

    return NextResponse.json({
      message: `Thank you for your interest, ${data.name}!`
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 