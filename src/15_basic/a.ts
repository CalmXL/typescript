export const a: string = '1';
export class Zoo {
  public monkey = '猴子'
}

export namespace Zoo {
  export let dog: string = 'zoo dog';
}

export namespace Zoo {
  export let cat: string = 'zoo cat';
}


export namespace Home {
  export let dog: string = 'home dog';


  export namespace X {
    export let dog: string = 'X dog';
  }
}

