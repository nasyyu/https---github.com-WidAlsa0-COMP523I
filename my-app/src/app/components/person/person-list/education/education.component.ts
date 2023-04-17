import { Component, OnInit } from '@angular/core';
import { Person, EducationColumn } from 'src/app/models/person.model'
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  displayedColumns: string[] = EducationColumn.map((col) => col.key);
  dataSource: any = [];
  columnsSchema: any = EducationColumn;

  constructor(private PersonService: PersonService) { }

  ngOnInit(): void {
    this.retrieveLogs();
  }

  retrieveLogs(): void {
    this.PersonService.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  deleteAll(): void {
    this.PersonService.deleteAll()
      .subscribe({
        next: (res) => {
          this.refreshList()
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  deleteOne(id: any): void {
    this.PersonService.delete(id)
      .subscribe({
        next: (res) => {
          this.refreshList()
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void {
    this.retrieveLogs();
  }

  editEntry(entry: Person) {
    this.PersonService.update(entry.uid, entry)
      .subscribe({
        next: (res) => {
          this.refreshList();
          console.log(res);
        },
        error: (e) => console.error(e)
      })
  }

  // searchName(): void {
  //   this.currentLog = {};
  //   this.currentIndex = -1;

  //   this.ClosedService.get(this.name)
  //     .subscribe({
  //       next: (data) => {
  //         this.Closeds = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
}
