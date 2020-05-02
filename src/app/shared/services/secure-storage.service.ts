import { Injectable, OnInit } from '@angular/core';
import { SecureStorage } from 'nativescript-secure-storage';

/** Service for storing device data in the form of key-value pairs securely. */
@Injectable({ providedIn: 'root' })
export class SecureStorageServive implements OnInit {
    /** Secure Storage object. */
    secureStorage = new SecureStorage();

    ngOnInit(): void {
        this.secureStorage.clearAllOnFirstRun();
    }

    /**
     * Set the value in secure storage.
     * @param key
     * @param value
     */
    set(key: string, value: string | object): Promise<boolean> {
        let newValue = value;
        if (typeof newValue === 'object') {
            newValue = JSON.stringify(newValue);
        }

        return this.secureStorage.set({
            key,
            value: newValue.toString(),
        });
    }

    /**
     * Get the value from secure storage.
     * @param key
     * @param value
     */
    get(key: string): any {
        const result = this.secureStorage.getSync({
            key,
        });

        return this.parseJSON(result);
    }

    /**
     * Get the value from secure storage.
     * @param key
     * @param value
     */
    async getAsync(key: string): Promise<any> {
        const result = await this.secureStorage.get({
            key,
        });

        return this.parseJSON(result);
    }

    /**
     * Removes secure storage based on a key.
     * @param key
     */
    remove(key: string): Promise<boolean> {
        return this.secureStorage.remove({
            key,
        });
    }

    /**
     * Removes all of the secure storage.
     * @param key
     */
    removeAll(): Promise<boolean> {
        return this.secureStorage.removeAll();
    }

    /** Determines if the app is running for the first time after an install or reinstall */
    ifFirstRun(): Promise<boolean> {
        return this.secureStorage.isFirstRun();
    }

    /**
     * Attempt to convert object to string.
     * @param input
     */
    private parseJSON(input: any): any {
        let result = input;

        try {
            result = JSON.parse(result);
        } catch {
            // Result was either null or string, no need to convert
        }

        return result;
    }
}
