export interface IAanvraag {
    aanvraagReden: 'overstappen';
    persoonlijkeGegevens: {
      naam: string;
      tussenvoegsel: string;
      achternaam: string;
      geslacht: string;
      geboortedatum: Date | undefined;
      burgerservicenummer: number | undefined;
    };
    basisVerzekering: string;
    betaaltermijn: 'per jaar' | string;
    eigenRisico: '€ 385 - verplicht eigen risico' | string;
    aanvullendeVerzekering: AanvullendeVerzekeringOption;
    tandVerzekering: 'Geen tandartsverzekering geselecteerd' | string;
  }

export interface AanvullendeVerzekeringOption {
  naam: string;
  prijs: string;
}
