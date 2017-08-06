import { Injectable } from "@angular/core";
import { Mission } from "../models/mission";


@Injectable()
export class MissionService{

    missions:Mission[];

    constructor(){
        this.missions = [];
    }

    listAll(){
        this.missions = [];
        
        let mission01 = new Mission("Sua empresa resolve algum problema?", "Um dos motivos de existência das empresas é <strong>resolver problemas de seus clientes.</strong>. As pessoas compram seus produtos ou usam seus serviços por que vêem <strong>valor</strong> neles e acreditam que ajudarão a resolver suas dificuldades. O empreendedor precisa ter uma visão clara sobre quais problemas resolve, pois este é o ponto de partida para conhecer melhor sobre quais soluções pode oferecer, como oferecer, bem como identificar o perfil das pessoas que passam por este problema.", "Qual ou quais problema(s) a sua empresa resolve?", 40);
        let mission02 = new Mission("Quem são os seus clientes?", "Toda empresa precisa focar em atender as necessidades de seus clientes. Para isto acontecer é <strong>fundamental conhecer as suas características</strong>, como faixa etária, classe social, gênero, localidade, entre outras. Saber destas informações ajuda você a compreender o perfil e hábitos de consumo. Esta informação é importante para determinar por exemplo, onde sua empresa deve se instalar, quais produtos ou serviços é interessante comercializar, quais estratégias de preços e de posicionamento de mercado pode adotar, assim como visualizar os melhores canais de comunicação para divulgar sua publicidade e alcançar este público.", "Defina o(s) perfil(s) dos seus clientes, considere informações como faixa etária e de rendimento, localização, gênero, entre outros", 50);
        let mission03 = new Mission("Como sua empresa resolve os problemas dos seus clientes?", "Pessoas compram produtos ou utilizam serviços esperando que eles <strong>resolvam suas necessidades</strong>. A sua solução deve <strong>entregar o valor</strong> esperado por eles, ou seja, além de resolver um problema é importante saber <strong>COMO</strong> seus clientes desejam receber esta solução. É fundamental entender o seu consumidor, como as outras empresas resolvem o mesmo problema e qual o <strong>diferencial</strong> que você possui. Afinal, por que sua empresa seria escolhida e não a empresa X, Y ou Z?", "Fale mais sobre qual solução você oferece e qual o diferencial dela em comparação a concorrência", 50);
        let mission04 = new Mission("Quem são os seus concorrentes?", "Conhecer a concorrência é fundamental para saber como sua empresa pode se <strong>posicionar</strong> no mercado, <strong>aproveitar o que funciona</strong> e <strong>evitar cometer os mesmos erros</strong>. Esta ação também irá lhe ajudar a definir melhor o seu diferencial e compreender melhor os seus consumidores, afinal empresas já existentes são ótimas fontes de estudo. Procure analisar os seguintes elementos dos seus concorrentes: localização, formas de pagamento, estratégias de publicidade adotadas, diferenciais, entre outros pontos que considerar importante.", "E então, quem são os seus concorrentes e quais as suas características?", 50);
        let mission05 = new Mission("Quem são os seus fornecedores?", "Manter uma lista organizada com os seus fornecedores ajuda a organização a mapear quem são os fornecedores que oferecem os produtos ou serviços com as melhores margens de lucro e formas de pagamento. Além disto é importante de tempos em tempos utilizar esta lista para verificar os lançamentos dos seus forncedores e manter a sua loja sempre atualizada. Registre qualquer observação sobre um fornecedor em especial, desde a facilidade em negociações à dificuldades que teve no passado.", "Quais são os seus fornecedores? Quais as formas de pagamento e outras anotações que deseja realizar?", 30);
        let mission06 = new Mission("Quem são os seus parceiros?", "Definir parceriais com outras empresas, nas quais ambos conquistam algo, é uma estratégia que pode ser adotada a um custo relativamente baixo. As parcerias podem ser pensadas em estratégias promocionais (como o sorteio de um final de semana em uma pousada que cedeu as diárias em troca de algum serviço ou produto seu), comerciais (uma empresa que comercializa o seu serviço/produto como parte do seu mix de vendas - por exemplo, uma cafeteria que estabelece uma parceria com uma empresa comercializa doces para vender em seu espaço por consignação), entre outras formas possíveis.", "Liste algumas possíveis parceriais e como cada um pode ser beneficiado", 20);
        let mission07 = new Mission("Qual a sua missão?", "Estabelecer a missão da empresa é um passo importante na <strong>definição de sua identidade</strong>. Esta identidade é o que determina <strong>como a empresa será vista</strong> por seus colaborades e clientes, devendo estar totalmente alinhada com as suas práticas, produtos que comercializa, estratégias de publicidade, entre outros aspectos. Neste sentido a missão é usada para descrever o propósito de existência da organização. É neste momento que o empreendedor deve deixar claro qual valor entrega aos seus clientes, ou seja, além do produto em si, o que o consumidor está levando da sua organização para si. De preferência seja curto e objetivo, valorize o seu diferencial e o valor que a sua organização entrega.", "Defina a sua missão", 60);
        let mission08 = new Mission("Qual a sua visão?", "É fundamental que os gestores de uma empresa tenham uma <strong>visão clara de onde querem chegar</strong>. Pode ser um aumento no número de clientes/vendas, expansão do negócio ou outro ponto específico. Ter uma visão de futuro ajuda a definir ações no presente para que se alcance este estado desejado e é este o objetivo em definir a visão da empresa. Diferente da missão que tende a mudar pouco a visão deve ser definida para um intervalo dos próximos 3 a 5 anos, devendo ser frequentemente avaliada para acompanhar se as ações da organização estão aproximando ou afastando o alcance da visão. Para isto, é preciso que em sua definição sejam definidas metas ou índices quantificáveis.", "Qual a sua visão de futuro para a sua empresa, o que espera alcançar?", 50);
        let mission09 = new Mission("Quais os seus valores?", "Uma empresa deve ser consistente em suas ações. O que é valorizado deve ser refletido em padrões que estão presentes em diversas áreas da empresa, do tipo e qualidade dos produtos que comercializa, a forma como lida com seus colaboradores, passando pelo atendimento ao consumidor, entre outros pontos, é fundamental para o sucesso. Para isto é importante refletir o que a empresa considera como importante. Quais princípios, valores ou atitudes, devem ser adotados e realizados pelos seus colaboradores e gestores para manter a identidade organizacional viva? Isto vai depender do estilo de cada empresa, o fundamental é ter isto definido e seguido por todos.", "Quais ideais ou princípios são valorizados na sua empres", 30);
        
        
        mission01.id = 1;
        mission02.id = 2;
        mission03.id = 3;
        mission04.id = 4;
        mission05.id = 5;
        mission06.id = 6;
        mission07.id = 7;
        //mission01.nextMission = mission02;
        //mission01.previousMission = null;
        //mission02.previousMission = mission01;
        
        this.missions.push(mission01);
        this.missions.push(mission02);
        this.missions.push(mission03);
        this.missions.push(mission04);
        this.missions.push(mission05);
        this.missions.push(mission07);
        return this.missions;
    }

    get(id){
        let mission = null;
        this.missions.filter(function(element){
            if(element.id == id){
                mission = element;
            }
        });
        return mission;
    }

}