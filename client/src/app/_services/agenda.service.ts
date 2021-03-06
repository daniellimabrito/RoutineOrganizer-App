import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agenda } from '../_models/Agenda';
import { environment } from 'src/environments/environment';

@Injectable()
export class AgendaService {

    // agendas: Agenda;
    url = environment.apiUrl + 'agenda';

constructor(private http: HttpClient) { }

    getAgenda() {
        return this.http.get<Agenda[]>(this.url);
    }

    getAgendaById(id: string) {
        return this.http.get<Agenda>(this.url + '/' + id);
    }

    getAgendaByPeriod(id: string) {
        return this.http.get<Agenda>(this.url + '/GetByPeriod/' + id);
    }

    addAgenda(agenda: Agenda) {
        return  this.http.post( this.url, agenda);
    }

    udpateAgenda(agenda: Agenda) {
        return  this.http.put( this.url, agenda);
    }

    deleteAgenda(id: string) {
        return  this.http.delete( this.url + '/' + id);
    }

}
