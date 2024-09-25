import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { CustomMessageService } from 'src/app/service/messageService/customMessage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  userId: string | null = null;
  users: any;
  isEdit: boolean = false; // Default as create mode
  selectedFiles: File[] = []; // For multiple files
  selectedFile!: File; // For a single file
  imagePreview =  [];
  genders: any[] = [
    { label: 'Male', gender: 'Male' },
    { label: 'Female', gender: 'Female' },
    { label: 'Other', gender: 'Other' }
  ];
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: CustomMessageService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.users = history.state.user;
    // Check if it's edit mode by checking for user ID in the route params
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
      }
    });
    // Initialize the form with isEdit flag
    this.fUser(this.isEdit);
  }

  fUser(isEdit: boolean) {
    this.userForm = this.fb.group({
      firstName: [this.users?.firstName || null, Validators.required],
      lastName: [this.users?.lastName || null, Validators.required],
      userName: [this.users?.userName || null, Validators.required],
      phone: [this.users?.phone || null, Validators.required],
      gender: [this.users?.gender, !this.isEdit ? [] : Validators.required], // No validation for edit, required for create
      email: [this.users?.email || null, [Validators.required, Validators.email]],
      password: [this.users?.password, !this.isEdit ? [] : Validators.required] // No validation for edit, required for create
    });
  }

  loadUserData(id: string): void {
    // Load user data by id and populate the form
  }

  onFileSelected(event: any): void {
    const files = event.target.files;

    if (files.length === 1) {
      // Single file selection
      this.selectedFile = files[0];
      this.previewSingleImage(this.selectedFile);
    } else if (files.length > 1) {
      // Multiple file selection
      this.selectedFiles = Array.from(files);
      this.previewMultipleImages(this.selectedFiles);
    }
  }

  previewSingleImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result; // base64 string of the single image
    };
    reader.readAsDataURL(file);
  }

  previewMultipleImages(files: File[]): void {
    this.imagePreview = []; // Clear previous previews
    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const target = e.target as FileReader; // Explicitly cast e.target to FileReader

        if (target && target.result) {
          // Assuming imagePreview is of type `Array<string | ArrayBuffer | null>`
          (this.imagePreview as Array<string | ArrayBuffer | null>).push(target.result);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  onDeleteImage() {
    this.imagePreview = [];
  }

  onSubmit() {

    if (!this.userId) {

      const formData = new FormData();

      // Append user data
      formData.append('user', new Blob([JSON.stringify(this.userForm.value)], {
        type: 'application/json'
      }));

      // Append single file if selected
      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }

      // Append multiple files if selected
      if (this.selectedFiles.length > 0) {
        this.selectedFiles.forEach(file => {
          formData.append('files', file);
        });
      }

      this.userService.createUser(formData).subscribe(
        (response: any) => {

          if (response.code === 200) {

            this.messageService.showSuccess("Create user success.");
            setInterval(() => {
              this.router.navigate(['/dashboard/user']); // Redirect to user list or another route after successful creation
            }, 1000);

          }

        },
        (error: HttpErrorResponse) => {
          // Log the error for further investigation
          this.messageService.showError("Error while creating user.");

        }
      );

    } else {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe((response: any) => {
        if (response.code === 200) {
          this.messageService.showSuccess("Update user success.");
          setTimeout(() => {
            this.router.navigate(['/dashboard/user']); // Redirect to user list or another route after successful creation
          }, 1000);
        }
      },
        (error: HttpErrorResponse) => {
          // Log the error for further investigation
          this.messageService.showError("Error while creating user.");

        })

    }
  }

}
