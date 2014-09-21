function Activity(name,state){
    this.name = name;
    this.state = state || 'unstart';
}

Activity.set_activity_list = function(activity){
    var activity_list = Activity.get_activities()?Activity.get_activities():[];
    activity_list.unshift(activity);
    Activity.save_activities(activity_list);
};


Activity.save_activities = function(activity_list){
    localStorage.setItem('activities',JSON.stringify(activity_list));
};

Activity.get_activities = function(){
    return JSON.parse(localStorage.getItem('activities'));
};

Activity.duplicated = function(input_text){
    var x;
    var activity_list = Activity.get_activities();
    for (x in activity_list) {
        if (input_text == activity_list[x]) {
            return true;
        }
    }
};

Activity.weathertoshow_fanhui = function(){
    var check;
    var If_Exist=Activity.get_activities()?[1]:[2];
    if(If_Exist[0] == 1){
        check=true;
    }
    else{
        check=false;
    }
    return check;
};

Activity.save_choosen_activity_state = function(state){
    return localStorage.setItem('activity_state',state);
};

Activity.get_choosen_activity_state = function(){
    return localStorage.getItem('activity_state');
};
