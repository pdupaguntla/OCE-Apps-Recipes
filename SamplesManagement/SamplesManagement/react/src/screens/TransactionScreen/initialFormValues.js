import { environment } from '../../../bridge/EnvironmentData/EnvironmentData.native';

const initialFormValues = {
  AcknowledgementOfShipment: {
    receivedDate: '',
    conditionOfPackage: null,
    comments: '',
    status: 'In Progress',
    transactionDateTime: new Date(),
    territory: environment.territory(),
    transactionRep: null,
    user: null,
  },
  Adjustment: {
    comments: '',
    status: 'In Progress',
    transactionDateTime: new Date(),
    territory: environment.territory(),
    transactionRep: null,
    user: null,
  },
  Return: {
    shipmentDate: null,
    shipmentCarrier: '',
    trackingNumber: '',
    comments: '',
    status: 'In Progress',
    transactionDateTime: new Date(),
    territory: environment.territory(),
    transactionRep: null,
    user: null,
  },
  TransferIn: {
    transactionDateTime: new Date(),
    status: 'In Progress',
    toSalesRep: null,
    toSalesRepTerritory: null,
    relatedTransactionName: null,
    fromSalesRep: null,
    fromSalesRepTerritory: null,
    shipTo: null,
    receivedDate: '',
    shipmentDate: null,
    conditionOfPackage: null,
    shipmentCarrier: null,
    trackingNumber: null,
    comments: '',
    user: null,
    territory: environment.territory(),
  },
  TransferOut: {
    transactionDateTime: new Date(),
    status: 'In Progress',
    toSalesRep: null,
    toSalesRepTerritory: environment.territory(),
    fromSalesRep: null,
    fromSalesRepTerritory: null,
    shipTo: null,
    shipmentDate: null,
    shipmentCarrier: null,
    trackingNumber: null,
    user: null,
    territory: environment.territory(),
  },
};

export default initialFormValues;