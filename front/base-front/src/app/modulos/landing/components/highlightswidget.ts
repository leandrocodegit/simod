import { Component } from '@angular/core';

@Component({
    selector: 'highlights-widget',
    template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Para todos os dipositivos</div>
                <span class="text-muted-color text-2xl">Responsiso e rápido</span>
            </div>

            <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup.png" class="w-11/12" alt="mockup mobile" />
                </div>

                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                    <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-mobile !text-4xl text-purple-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Usabilidade</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                        >Trazemos o melhor para seu cliente, pensado na usabilidade, nosso sistema tem foco principal na satisfação do seu cliente, com um sistema intuitivo e prático para ambos os lados.</span
                    >
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div class="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-desktop !text-3xl text-yellow-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Constante desenvolvimento</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px"
                        >Estamos constantemente desenvolvendo nosso sistema, damos a liberadade para que qualquer pessoa, traga sua necessidade até nós, que transformamos em um novo modulo para que outras pessoas também possam utulizar.</span
                    >
                </div>

                <div class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-yellow-100 p-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png" class="w-11/12" alt="mockup" />
                </div>
            </div>
        </div>
    `
})
export class HighlightsWidget {}
