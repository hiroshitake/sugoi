# Arquitetura do Sugoi

## Fluxo

Garçom → API → Cozinha/Caixa via Socket.io → Banco MySQL.

### REST
Usado para autenticação, CRUD, consultas e operações transacionais.

### WebSocket
Socket.io será usado para eventos como novo pedido, atualização de item, pedido pronto, mesa atualizada, conta solicitada, pagamento confirmado e alerta de estoque.

## Regras críticas

1. O preço e o custo são copiados para ItemPedido no momento da venda.
2. Cancelamentos precisam ser transacionais para evitar divergência de estoque.
3. Alterações financeiras e de estoque terão trilha de auditoria.
4. Rotas e eventos serão protegidos por perfil.
5. Pagamentos nunca armazenarão dados de cartão.
6. Operações de pedido serão idempotentes para evitar pedidos duplicados em reconexões.

## MVP

1. Login e perfis.
2. Mapa de mesas e comandas.
3. Garçom cria pedido.
4. Cozinha recebe em tempo real e altera status.
5. Caixa acompanha e fecha com pagamento manual.
6. Depois: estoque, custos, financeiro e pagamentos online.
