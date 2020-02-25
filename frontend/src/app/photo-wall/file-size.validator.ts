import { AbstractControl, ValidationErrors } from '@angular/forms'

export class FileSizeValidator {
  constructor(protected readonly maxSizeInBytes: number){}

  public validateSize(control: AbstractControl): ValidationErrors | null {
    const isInvalid =
      control.value !== undefined &&
      typeof(control.value) !== 'string' &&
      (control.value as File).size >= this.maxSizeInBytes

    return isInvalid ? { maxFileSize: true } : null
  }
}
