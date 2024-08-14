import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

interface Hero {
  id: number;
  name: string;
  power: string;
}

export async function GET() {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'heroes.json');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const heroes: Hero[] = JSON.parse(fileContent);
    return NextResponse.json(heroes);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao ler o arquivo de heróis' }, { status: 500 });
  }
}
