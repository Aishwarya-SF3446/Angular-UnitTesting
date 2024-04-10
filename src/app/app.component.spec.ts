import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridAllModule, GridComponent } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GridAllModule],
            declarations: [GridComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should have 10 items in the grid', async () => {
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.grid.currentViewData.length).toBe(10);
    });
});
