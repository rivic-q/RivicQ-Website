let prisma = null;

export async function getPrisma() {
  if (prisma) return prisma;
  try {
    const { PrismaClient } = await import('@prisma/client');
    prisma = new PrismaClient();
    return prisma;
  } catch (e) {
    console.warn('Prisma client unavailable. Run `npm install` and `npx prisma generate` to enable DB persistence.');
    return null;
  }
}
