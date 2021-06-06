export class Staff {
    // StaffID: number | undefined;
    // Username: string | undefined;
    // UserPassword: string | undefined;
    // Firstname: string | undefined;
    // Lastname: string | undefined;
    // Gender: string | undefined;
    // Emaill: string | undefined;
    // BOD: Date | undefined;
    // Address: string | undefined;
    // Phone: number | undefined;
    // Position: string | undefined;
    Staff_ID: Float32Array | undefined;
    Username: string | undefined;
    UserPassword: string | undefined;
    Firstname_Lastname: string | undefined;
    Email: string | undefined;
    BOD: Date | undefined;
    Address: Float32Array | undefined;
    Phone: string | undefined;
    Position: string | undefined;

}
    export interface StaffAll {
    result: Staff[],
    message: string
}