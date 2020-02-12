export const pathUrl = 'localhost:3000';

export const fs = import('fs');

export function decodeBase64Image(dataString: string) {
    const response: any = {
        type: null,
        data: null,
    };

    const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}
