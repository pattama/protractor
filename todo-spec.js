describe('safe login', function() {
    it('should pass authenticaion and redirected to hannu dashboard', function() {

        browser.ignoreSynchronization = true;
        browser.get('https://compass.thomsonreuters.com/monitor/alarms/dashboard');
        browser.findElement(by.id('USER')).sendKeys('xxxxx');
        browser.findElement(by.id('PASSWORD')).sendKeys('xxxxxx');
        browser.findElement(by.id('safeLoginbtn')).click();

        browser.wait(function() {
            return browser.getCurrentUrl().then(function(url) {
                return /dashboard/.test(url);
            });
        });

        browser.sleep(5000);

        expect(browser.getTitle()).toEqual('Compass Monitoring');
    });

});
