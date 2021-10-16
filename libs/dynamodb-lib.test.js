const dynamodb_lib = require("./dynamodb-lib")
// @ponicode
describe("dynamodb_lib.default.get", () => {
    test("0", () => {
        let param1 = [["https://croplands.org/app/a/confirm?t=", "ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://"], ["Www.GooGle.com", "https://api.telegram.org/bot", "http://www.example.com/route/123?foo=bar"]]
        let callFunction = () => {
            dynamodb_lib.default.get(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["https://twitter.com/path?abc", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "http://www.example.com/route/123?foo=bar", "http://www.croplands.org/account/confirm?t="], ["https://api.telegram.org/", "https://", "https://"]]
        let callFunction = () => {
            dynamodb_lib.default.get(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["http://base.com", "https://twitter.com/path?abc", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://www.example.com/route/123?foo=bar", "https://api.telegram.org/bot", "https://api.telegram.org/bot"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/"]]
        let callFunction = () => {
            dynamodb_lib.default.get(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token=", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://croplands.org/app/a/reset?token=", "https://api.telegram.org/bot", "https://"], ["https://api.telegram.org/bot", "https://api.telegram.org/", "www.google.com"]]
        let callFunction = () => {
            dynamodb_lib.default.get(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["https://api.telegram.org/bot", "www.google.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://", "https://croplands.org/app/a/reset?token="], ["http://www.croplands.org/account/confirm?t=", "http://base.com", "https://api.telegram.org/bot"]]
        let callFunction = () => {
            dynamodb_lib.default.get(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            dynamodb_lib.default.get(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("dynamodb_lib.default.put", () => {
    test("0", () => {
        let param1 = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "Www.GooGle.com"], ["https://api.telegram.org/", "ponicode.com", "http://www.croplands.org/account/confirm?t="], ["http://www.croplands.org/account/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/"]]
        let callFunction = () => {
            dynamodb_lib.default.put(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["https://api.telegram.org/", "https://api.telegram.org/bot", "www.google.com"], ["https://twitter.com/path?abc", "http://www.example.com/route/123?foo=bar", "www.google.com"], ["www.google.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/"]]
        let callFunction = () => {
            dynamodb_lib.default.put(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["http://base.com", "www.google.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://", "https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://api.telegram.org/bot", "https://api.telegram.org/", "www.google.com"]]
        let callFunction = () => {
            dynamodb_lib.default.put(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["http://www.croplands.org/account/confirm?t=", "https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["www.google.com", "http://base.com", "https://api.telegram.org/"], ["https://api.telegram.org/", "ponicode.com", "https://api.telegram.org/"]]
        let callFunction = () => {
            dynamodb_lib.default.put(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["https://croplands.org/app/a/reset?token=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/"], ["https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/confirm?t=", "ponicode.com"], ["http://base.com", "https://croplands.org/app/a/confirm?t=", "http://www.croplands.org/account/confirm?t="]]
        let callFunction = () => {
            dynamodb_lib.default.put(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            dynamodb_lib.default.put(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("dynamodb_lib.default.query", () => {
    test("0", () => {
        let param1 = [["https://", "https://twitter.com/path?abc", "ponicode.com"], ["https://api.telegram.org/bot", "https://twitter.com/path?abc", "ponicode.com"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/"]]
        let callFunction = () => {
            dynamodb_lib.default.query(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["ponicode.com", "https://api.telegram.org/bot", "https://croplands.org/app/a/reset?token="], ["https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.example.com/route/123?foo=bar", "https://api.telegram.org/bot"]]
        let callFunction = () => {
            dynamodb_lib.default.query(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Www.GooGle.com", "https://twitter.com/path?abc", "https://api.telegram.org/"], ["www.google.com", "https://api.telegram.org/bot", "ponicode.com"], ["https://api.telegram.org/bot", "ponicode.com", "https://api.telegram.org/bot"]]
        let callFunction = () => {
            dynamodb_lib.default.query(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["https://api.telegram.org/bot", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/"], ["http://www.example.com/route/123?foo=bar", "Www.GooGle.com", "https://twitter.com/path?abc"], ["Www.GooGle.com", "http://www.croplands.org/account/confirm?t=", "www.google.com"]]
        let callFunction = () => {
            dynamodb_lib.default.query(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["https://api.telegram.org/", "https://", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://", "https://croplands.org/app/a/confirm?t=", "http://www.example.com/route/123?foo=bar"], ["https://api.telegram.org/", "https://croplands.org/app/a/reset?token=", "https://api.telegram.org/bot"]]
        let callFunction = () => {
            dynamodb_lib.default.query(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            dynamodb_lib.default.query(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("dynamodb_lib.default.update", () => {
    test("0", () => {
        let callFunction = () => {
            dynamodb_lib.default.update(["http://base.com", "Www.GooGle.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            dynamodb_lib.default.update(["https://api.telegram.org/bot", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://accounts.google.com/o/oauth2/revoke?token=%s"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            dynamodb_lib.default.update(["ponicode.com", "http://www.example.com/route/123?foo=bar", "http://www.croplands.org/account/confirm?t="])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            dynamodb_lib.default.update(["http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/", "http://www.example.com/route/123?foo=bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            dynamodb_lib.default.update(["http://www.example.com/route/123?foo=bar", "http://www.example.com/route/123?foo=bar", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            dynamodb_lib.default.update(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("dynamodb_lib.default.delete", () => {
    test("0", () => {
        let param1 = [["www.google.com", "www.google.com", "https://croplands.org/app/a/reset?token="], ["https://", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"], ["https://api.telegram.org/", "http://base.com", "https://croplands.org/app/a/reset?token="]]
        let callFunction = () => {
            dynamodb_lib.default.delete(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["http://base.com", "ponicode.com", "Www.GooGle.com"], ["www.google.com", "Www.GooGle.com", "ponicode.com"], ["https://croplands.org/app/a/confirm?t=", "http://www.croplands.org/account/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let callFunction = () => {
            dynamodb_lib.default.delete(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["https://croplands.org/app/a/confirm?t=", "https://", "https://croplands.org/app/a/confirm?t="], ["Www.GooGle.com", "https://croplands.org/app/a/confirm?t=", "https://twitter.com/path?abc"], ["https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/bot"]]
        let callFunction = () => {
            dynamodb_lib.default.delete(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["http://www.croplands.org/account/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t="], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/reset?token="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://accounts.google.com/o/oauth2/revoke?token=%s", "http://www.example.com/route/123?foo=bar"]]
        let callFunction = () => {
            dynamodb_lib.default.delete(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["https://api.telegram.org/", "https://", "https://twitter.com/path?abc"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://twitter.com/path?abc", "http://base.com"], ["https://api.telegram.org/", "http://www.example.com/route/123?foo=bar", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let callFunction = () => {
            dynamodb_lib.default.delete(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            dynamodb_lib.default.delete(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
