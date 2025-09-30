As ordens de serviço são referentes ao registro no [[SIAT🚚🌐|SIAT]] das utilizações de itens que foram incluídos no [[Estoque 📦|estoque]] e realizações de serviços internos, na oficina da Moycana, quando há interesse em mantê-los registrados por quaisquer motivos.

Antes de se realizar qualquer lançamento e baixa, é importante se atentar à quantidade de itens no [[Estoque 📦|estoque]].

![[Pasted image 20250923164659.png]]

---
# Passo a passo
## Criando a OS
Ao criar nova OS, preenche-se obrigatoriamente a placa, o motorista e a quilometragem do veículo que está em manutenção. Deve-se incluir a data e hora do início da prestação do serviço e, no momento de concluir, a data e hora da finalização.

É interessante que no campo "Observações" seja feita uma descrição detalhada de todos os processos pelos quais o veículo será submetido.

### Preenchendo os produtos
Na Lista de Produtos, insere-se todos os itens que serão aplicados no veículo; sejam eles retirados de [[Estoque 📦|estoque]], sejam eles comprados.

![[Pasted image 20250923164801.png]]
<span style="font-size: smaller">Tela de criação de Ordem de Serviço.</span>

Caso o item tenha sido comprado posteriormente à criação da Ordem de Serviço, deve-se preencher o campo "Ordem de Serviço" com o número da OS durante o [[Lançamento de NF de Produto 📃🔧|lançamento de nota fiscal de produto]].
![[Pasted image 20250923165357.png]]
<span style="font-size: smaller">Campo "Ordem de Serviço" durante lançamento de NF de Produto.</span>

![[Pasted image 20250923165541.png]]

<span style="font-size: smaller">Campo "Ordem de Serviço" durante lançamento item de NF de Produto. O vínculo entre NF e OS pode ser feito contemplando apenas alguns itens se necessário.</span>

> [!tip] Dica
> Código mais comum para troca de óleo de motor: **4649**

### Preenchendo os serviços
Deve-se inserir os serviços a serem prestados na Lista de Serviços. Geralmente descrições breves como "SERVIÇO DE MANUTENÇÃO" (código 10756) ou "SERVIÇO DE BORRACHARIA INTERNO" (código 98) bastam. Maiores detalhes podem ser incluídos no campo "Observações" da OS.
![[Pasted image 20250923165927.png]]
<span style="font-size: smaller">Lista de serviços da OS.</span>

Feito o processo, clica-se no botão "Salvar" no campo superior direito da tela.

## Liberando a OS para atendimento
Após criar e salvar a OS, consulta-se se o serviço está autorizado. Estando autorizado, clica-se em "Liberar solicitação da ordem de serviço para atendimento" no ícone de prancheta no canto superior direito da tela.
![[Pasted image 20250923170415.png]]
<span style="font-size: smaller">Botão de liberar OS.</span>

## Baixando as peças
Para baixar as peças da ordem de serviço, precisa-se informar a origem dos produtos.
Primeiro entra-se na tela de Baixar Peças, pesquisa-se o número da OS e entra-se na OS pesquisada.
![[Pasted image 20250923171052.png]]
<span style="font-size: smaller">Passo a passo.</span>

Uma vez dentro da OS, clica-se no ícone de seta para baixo quando há intenção de retirar uma peça do [[Estoque 📦|estoque]].

![[Pasted image 20250923171255.png]]

<span style="font-size: smaller">Baixar pelo estoque.</span>

Caso o desejado seja baixar através de uma compra, basta vincular no campo "Ordem de Serviço" durante o lançamento de uma nota fiscal, conforme explicado anteriormente neste artigo.

## Executando os serviços
![[Pasted image 20250923171538.png]]
<span style="font-size: smaller">Entrando na tela de Executar Serviço.</span>
![[Pasted image 20250923171825.png]]
<span style="font-size: smaller">Executando o serviço.</span>

Feito o processo, pode-se clicar em "Sair" e "Salvar". A Ordem de Serviço constará como "Atendido" automaticamente a partir disso.