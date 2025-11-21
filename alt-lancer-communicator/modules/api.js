import { AltLancerCommunicator } from './alt-communicator.js';

export function registerAPI() {
  const api = {
    openCommunicatorSettings: AltLancerCommunicator.openCommunicatorSettings.bind(AltLancerCommunicator),
    sendCommunicatorMessage: AltLancerCommunicator.sendCommunicatorMessage.bind(AltLancerCommunicator)
  };
  
  game.modules.get('alt-lancer-communicator').api = api;
}