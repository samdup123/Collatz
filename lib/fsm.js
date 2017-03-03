let SIGNAL_ENTRY = 1

class fsm {

  constructor(state) {
    if (typeof(state) == 'number') 
    {
      this.state = state;
      this.sendSignal(SIGNAL_ENTRY)
    }
  }

  sendSignal(signal)
  {

  }

}
