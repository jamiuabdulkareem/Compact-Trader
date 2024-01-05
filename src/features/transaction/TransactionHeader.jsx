function TransactionHeader() {
  return (
    <header className="grid grid-cols-6 items-center border-b text-center bg-slate-100 border-slate-300 gap-2 px-2 py-2.5">
      <h2>TradeID</h2>
      <h2>Type</h2>
      <h2>Time</h2>
      <h2>Amount</h2>
      <h2>Status</h2>
      {/* <h2>TradeID</h2> */}
    </header>
  );
}

export default TransactionHeader;
