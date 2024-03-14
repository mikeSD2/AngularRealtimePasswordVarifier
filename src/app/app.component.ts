import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordComplexityComponent } from "./password-complexity/password-complexity.component";
import { PasswordInputComponent } from "./password-form/password-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PasswordComplexityComponent, PasswordInputComponent]
})
export class AppComponent {
  title = 'validationtestapp';
}
