import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoReact } from '@ng-icons/ionicons';
import { remixNextjsLine } from '@ng-icons/remixicon';
import { tablerBrandTailwind } from '@ng-icons/tabler-icons';
import { simpleBootstrap, simpleNodedotjs, simpleNestjs } from '@ng-icons/simple-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent, CommonModule],
  templateUrl: './app.component.html',
  viewProviders: [
    provideIcons({
      ionLogoReact,
      remixNextjsLine,
      tablerBrandTailwind,
      simpleBootstrap,
      simpleNodedotjs,
      simpleNestjs
    }),
  ],
})
export class AppComponent {
  public technologies = [
    { name: 'Next.js', icon: 'remixNextjsLine', class: 'hover:text-black' },
    { name: 'React', icon: 'ionLogoReact', class: 'hover:text-sky-400', iconClass: 'group-hover:animate-spin-slow' },
    { name: 'Tailwind CSS', icon: 'tablerBrandTailwind', class: 'hover:text-teal-400' },
    { name: 'Bootstrap', icon: 'simpleBootstrap', class: 'hover:text-purple-600' },
    { name: 'Node.js', icon: 'simpleNodedotjs', class: 'hover:text-lime-600' },
    { name: 'Nest.js', icon: 'simpleNestjs', class: 'hover:text-red-500' },
  ];
}
