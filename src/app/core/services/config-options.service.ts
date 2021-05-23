import { Injectable } from '@angular/core';
import {Config} from '../../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configuration: Partial<Config> | null = null;

  constructor() {

  }

  setConfig(config: Partial<Config>): void {
    this.configuration = {...config};
  }

  getConfig(): Partial<Config> | null{
    return this.configuration;
  }
}
