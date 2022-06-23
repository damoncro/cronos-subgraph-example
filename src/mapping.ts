import { TokenTransfer } from "../generated/schema";
import { Transfer } from "../generated/Example/ERC20";

export function handleTransfer(event: Transfer): void {
  let fromAddress = event.params.from.toHex();
  let toAddress = event.params.to.toHex();
  let transferAmount = event.params.value.toBigDecimal();
  let transactionHash = event.transaction.hash.toHex();
  let eventLogId = transactionHash.concat("-").concat(event.logIndex.toString());

  let transfer = TokenTransfer.load(eventLogId);
  if (transfer === null) {
    transfer = new TokenTransfer(eventLogId);
    transfer.from = event.params.from.toHex();
    transfer.amount = event.params.value;
    transfer.block = event.block.number;
    transfer.transactionHash = transactionHash;
    transfer.timestamp = event.block.timestamp;
    transfer.save();
  }
}
