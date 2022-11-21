export default interface ICreateTransactionDTO {
  debitedAccountId: string;
  creditedAccountId: string;
  value: number;  
}
