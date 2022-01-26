import {parse, UrlWithParsedQuery} from "url";
import {InvalidArgument} from "../errors/invalid-arg";

export class UrlLogin {
    public static parseUrl ( url: string): UrlWithParsedQuery {
        if (!url) {
            throw new InvalidArgument('Invalid Url')
        }
        return parse(url,true)
    }
}