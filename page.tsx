'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 space-y-12">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Treinador Caio Lima</h1>
        <p className="text-lg mb-6">
          Consultoria Online e Presencial | Atendimento 24h | Avaliações para PCD
        </p>
        <div className="space-x-4">
          <Button asChild><a href="https://wa.me/5571991204664" target="_blank" rel="noopener noreferrer">Fale no WhatsApp</a></Button>
          <Button asChild variant="outline"><a href="https://instagram.com/treinador_caiolima" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Sobre Mim</h2>
        <p className="text-base">
          Caio Lima é <strong>Bacharel em Educação Física</strong>, graduado pela <strong>Faculdade Anhanguera Unime de Salvador</strong>.
          Registro profissional: <strong>CREF 019580-G/BA</strong>. Atua com consultoria online e presencial, incluindo avaliações
          específicas para pessoas com deficiência, com foco em resultados reais, segurança e excelência.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Planos de Consultoria</h2>
        <ul className="list-disc pl-6">
          <li>Treino Personalizado Mensal</li>
          <li>Treino para Pessoas com Deficiência</li>
          <li>Acompanhamento com Avaliação Física</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Avaliações de Clientes</h2>
        <Card className="mb-4">
          <CardContent className="p-4">
            <p>“Comecei sedentário e hoje tenho muito mais disposição. Caio me acompanha em tudo!”</p>
            <span className="text-sm text-muted">– Cliente satisfeito</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p>“Atendimento humanizado e sempre disponível. Me senti respeitado como PCD.”</p>
            <span className="text-sm text-muted">– Aluno com deficiência física</span>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Blog</h2>
        <ul className="list-disc pl-6">
          <li><Link href="#">Dicas para treinar sozinho com segurança</Link></li>
          <li><Link href="#">Importância da avaliação física antes de começar</Link></li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Contato</h2>
        <p>Email: atendimento@treinadorcaiolima.com</p>
        <p>Instagram: <a href="https://instagram.com/treinador_caiolima" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">@treinador_caiolima</a></p>
        <p>WhatsApp: <a href="https://wa.me/5571991204664" target="_blank" className="text-green-600 underline" rel="noopener noreferrer">Clique aqui para conversar</a></p>
      </section>
    </main>
  );
}
