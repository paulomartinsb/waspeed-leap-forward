import { Layout } from "@/components/layout/Layout";

export default function PrivacidadePage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Introdução
                </h2>
                <p className="text-muted-foreground">
                  A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o WaSpeed coleta, usa, armazena e protege suas informações pessoais quando você utiliza nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Informações que Coletamos
                </h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos as seguintes categorias de informações:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Dados de cadastro:</strong> nome, email, telefone, empresa</li>
                  <li><strong>Dados de uso:</strong> logs de acesso, funcionalidades utilizadas</li>
                  <li><strong>Dados de pagamento:</strong> informações para processamento de cobranças</li>
                  <li><strong>Dados de atendimento:</strong> conversas e contatos gerenciados na plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Como Usamos suas Informações
                </h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Fornecer e manter nossos serviços</li>
                  <li>Processar pagamentos e gerenciar sua assinatura</li>
                  <li>Enviar comunicações importantes sobre o serviço</li>
                  <li>Melhorar e personalizar sua experiência</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Compartilhamento de Dados
                </h2>
                <p className="text-muted-foreground">
                  Não vendemos suas informações pessoais. Compartilhamos dados apenas com prestadores de serviços necessários para operação da plataforma (processadores de pagamento, servidores de hospedagem) e quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Segurança dos Dados
                </h2>
                <p className="text-muted-foreground">
                  Implementamos medidas técnicas e organizacionais para proteger suas informações, incluindo criptografia de dados, backups regulares e controle de acesso restrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Seus Direitos (LGPD)
                </h2>
                <p className="text-muted-foreground mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar a exclusão de dados desnecessários</li>
                  <li>Revogar seu consentimento</li>
                  <li>Solicitar portabilidade dos dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Retenção de Dados
                </h2>
                <p className="text-muted-foreground">
                  Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário para fornecer nossos serviços. Após o cancelamento, os dados são retidos por 30 dias para backup, depois são permanentemente excluídos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Cookies
                </h2>
                <p className="text-muted-foreground">
                  Utilizamos cookies essenciais para funcionamento da plataforma e cookies de análise para melhorar nossos serviços. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Contato do DPO
                </h2>
                <p className="text-muted-foreground">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato com nosso Encarregado de Proteção de Dados: privacidade@waspeed.com.br
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
