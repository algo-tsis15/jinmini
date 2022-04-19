function solution(play_time, adv_time, logs) {
    var ad = new Array(300000);
    for(var logtime in logs)
    {
        var start_log = logtime.substring(0,7);
        var end_log = logtime.substring(9,16);
        const slog = start_log.split(':');
        const elog = end_log.split(':');
        var i =0;
        for(i=slog[0]*3600 + slog[1]*60 + slog[2]; i<=elog[0]*3600 + elog[1]*60 + elog[2]; i++)
        {
            if(ad[i]==null)
            {
                ad[i]=1;
            }
            else
            {
                ad[i]+=1;                
            }
        }        
    }
    var answer = '';
    return ad;
}
