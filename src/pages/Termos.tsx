import { Layout } from "@/components/layout/Layout";

export default function TermosPage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-muted-foreground">
                  Ao acessar e utilizar os serviços do WaSpeed, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Descrição do Serviço
                </h2>
                <p className="text-muted-foreground">
                  O WaSpeed é uma plataforma de automação e gestão de atendimento via WhatsApp Business. Oferecemos ferramentas para organização de contatos, automação de mensagens, gestão de equipes e análise de métricas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Uso Aceitável
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ao utilizar nossos serviços, você concorda em:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Seguir as diretrizes e políticas do WhatsApp Business</li>
                  <li>Não enviar spam ou mensagens não solicitadas</li>
                  <li>Não utilizar o serviço para fins ilegais</li>
                  <li>Manter suas credenciais de acesso em segurança</li>
                  <li>Respeitar a privacidade dos seus contatos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Pagamentos e Assinatura
                </h2>
                <p className="text-muted-foreground">
                  Os serviços do WaSpeed são oferecidos em modelo de assinatura mensal. O pagamento é cobrado no início de cada período. O cancelamento pode ser feito a qualquer momento, com acesso garantido até o final do período pago.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Limitação de Responsabilidade
                </h2>
                <p className="text-muted-foreground">
                  O WaSpeed não se responsabiliza por banimentos ou restrições impostas pelo WhatsApp devido ao mau uso da plataforma pelo usuário. Recomendamos seguir sempre as melhores práticas de uso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Modificações nos Termos
                </h2>
                <p className="text-muted-foreground">
                  Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por email aos usuários ativos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Contato
                </h2>
                <p className="text-muted-foreground">
                  Para dúvidas sobre estes Termos de Uso, entre em contato através do email: juridico@waspeed.com.br
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
