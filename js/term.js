var Term = {
    term: document.getElementById ('terminal'),
    cur_prompt: document.getElementsByClassName ('prompt')[0],
    cur_cmd: document.getElementsByClassName ('cmdline')[0],
    history: [],
    hist_level: -1,
    pwd: ["home", "guest"],
    dirtree:
    {
        'name': '/',
        'type': 'dir',
        'children': [
            {
                'name': 'home',
                'type': 'dir',
                'children': [
                    {
                        'name': 'guest',
                        'type': 'dir',
                        'children': [
                            {
                                'name': 'about',
                                'type': 'link',
                                'url': 'docs/about.html'
                            },
                            {
                                'name': 'projects',
                                'type': 'link',
                                'url': 'docs/projects.html'
                            },
                            {
                                'name': 'members',
                                'type': 'dir',
                                'children': [
                                    {
                                        'name': 'afroz-ahamad',
                                        'type': 'link',
                                        'url': 'docs/members/afroz-ahamad.html'
                                    },
                                    {
                                        'name': 'ajay-krishna',
                                        'type': 'link',
                                        'url': 'docs/members/ajay-krishna.html'
                                    },
                                    {
                                        'name': 'basu-dubey',
                                        'type': 'link',
                                        'url': 'docs/members/basu-dubey.html'
                                    },
                                    {
                                        'name': 'harshit-agarwal',
                                        'type': 'link',
                                        'url': 'docs/members/harshit-agarwal.html'
                                    },
                                    {
                                        'name': 'hitesh-bhagchandani',
                                        'type': 'link',
                                        'url': 'docs/members/hitesh-bhagchandani.html'
                                    },
                                    {
                                        'name': 'kushagra-agrawal',
                                        'type': 'link',
                                        'url': 'docs/members/kushagra-agrawal.html'
                                    },
                                    {
                                        'name': 'kushal-agrawal',
                                        'type': 'link',
                                        'url': 'docs/members/kushal-agrawal.html'
                                    },
                                    {
                                        'name': 'naren-surampudi',
                                        'type': 'link',
                                        'url': 'docs/members/naren-surampudi.html'
                                    },
                                    {
                                        'name': 'praneet-mehta',
                                        'type': 'link',
                                        'url': 'docs/members/praneet-mehta.html'
                                    },
                                    {
                                        'name': 'rohitt-vashishtha',
                                        'type': 'link',
                                        'url': 'docs/members/rohitt-vashishtha.html'
                                    },
                                    {
                                        'name': 'sample-member',
                                        'type': 'link',
                                        'url': 'docs/members/sample-member.html'
                                    },
                                    {
                                        'name': 'shri-akhil-chellapilla',
                                        'type': 'link',
                                        'url': 'docs/members/shri-akhil-chellapilla.html'
                                    },
                                    {
                                        'name': 'srimanta-barua',
                                        'type': 'link',
                                        'url': 'docs/members/srimanta-barua.html'
                                    },
                                    {
                                        'name': 'uddhav-mishra',
                                        'type': 'link',
                                        'url': 'docs/members/uddhav-mishra.html'
                                    },
                                    {
                                        'name': 'vaibhav-bhasin',
                                        'type': 'link',
                                        'url': 'docs/members/vaibhav-bhasin.html'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

function focus_on_term () {
    Term.cur_cmd.focus ();
}

function get_raw_pwd () {
    return '/' + Term.pwd.join ('/');
}

function get_pwd () {
    if (Term.pwd.length == 2 && Term.pwd[0] == 'home' && Term.pwd[1] == 'guest') {
        return '~';
    }
    if (Term.pwd.length <= 2) {
        return '/' + Term.pwd.join ('/');
    }
    return Term.pwd.slice (Term.pwd.length - 2,).join ('/');
}

function refresh_prompt () {
    if (Term.term.cur_cmd != undefined) {
        Term.cur_cmd.setAttribute ('contenteditable', 'false');
    }

    var new_in_line = document.createElement ('span');
    new_in_line.classList.add ('in_line');

    var new_prompt = document.createElement ('span');
    new_prompt.classList.add ('prompt');

    var new_pwd = document.createElement ('span');
    new_pwd.classList.add ('pwd');
    new_pwd.innerHTML = get_pwd ();
    new_prompt.appendChild (new_pwd);

    new_prompt.innerHTML += " $";
    new_in_line.appendChild (new_prompt);
    new_in_line.innerHTML += " ";

    var new_cmdline = document.createElement ('span');
    new_cmdline.classList.add ('cmdline');
    new_cmdline.setAttribute ('contenteditable', 'true');
    new_in_line.appendChild (new_cmdline);

    Term.term.appendChild (new_in_line);
    Term.cur_prompt = new_prompt;
    Term.cur_cmd = new_cmdline;
    focus_on_term ();
}

function gen_response (response) {
    var line = document.createElement ('span');
    line.classList.add ('out_line');
    line.innerHTML = response;
    Term.term.innerHTML += '<br/>';
    Term.term.appendChild (line);
}

function cmd_pwd () {
    return '/' + Term.pwd.join ('/');
}

function highlight_node (dir_elem) {
    return "<span class='ls-" + dir_elem['type'] + "'>" + dir_elem['name'] + "</span>";
}

function get_color_dir_listing (dir_elem) {
    var i;
    var ret = ""
    var children = dir_elem['children'];
    for (i = 0; i < children.length; i++) {
        var child = children[i];
        ret += highlight_node (child) + '  ';
    }
    return ret;
}

function get_full_path (pathstr) {
    if (pathstr[0] == '~') {
        pathstr = "/home/guest/" + pathstr.slice (1,);
    } else if (pathstr.slice (0, 2) == './') {
        pathstr = get_raw_pwd () + pathstr.slice (1,);
    } else if (pathstr.length == 0 || pathstr[0] != '/') {
        pathstr = get_raw_pwd () + '/' + pathstr;
    }
    return pathstr;
}

function resolve_path_to_dir_stack (pathstr) {
    var dirstack = [Term.dirtree];
    var cur_dir = dirstack[0];
    pathstr = get_full_path (pathstr);
    var path = pathstr.split ('/').filter (function (x) { return x.length > 0; });
    if (path.length == 0) {
        return Term.dirtree;
    }
    var i, j;
    for (i = 0; i < path.length; i++) {
        if (path[i] == '..') {
            if (dirstack.length == 0) {
                return null;
            }
            dirstack = dirstack.slice (0,-1);
            cur_dir = dirstack[dirstack.length - 1];
            continue;
        }
        var children = cur_dir['children'];
        if (children == undefined) {
            return null;
        }
        var found = false;
        for (j = 0; j < children.length; j++) {
            var child = children[j];
            if (child['name'] == path[i]) {
                cur_dir = child;
                dirstack.push (cur_dir);
                found = true;
                break;
            }
        }
        if (!found || i != path.length - 1 && cur_dir['type'] != 'dir') {
            return null;
        }
    }
    return dirstack;
}

function resolve_path_to_dir_elem (pathstr) {
    var stack = resolve_path_to_dir_stack (pathstr);
    if (stack == undefined) {
        return null;
    }
    return stack[stack.length - 1];
}

function get_full_cleaned_path_arr (pathstr) {
    var stack = resolve_path_to_dir_stack (pathstr).slice (1,).map (function (x) { return x['name']; } );
    if (stack == undefined) {
        return null;
    }
    return stack;
}

function cmd_ls (pathstr) {
    var cur_dir = resolve_path_to_dir_elem (pathstr);
    if (cur_dir == undefined) {
            return "ls: cannot access '" + pathstr + "'.: No such file or directory";
    }
    if (cur_dir['type'] != 'dir') {
        return highlight_node (cur_dir);
    }
    return get_color_dir_listing (cur_dir);
}

function exec_cmd (cmd) {
    var cmd_arr = cmd.split (' ');
    switch (cmd_arr[0]) {
        case 'pwd': {
            gen_response (cmd_pwd ());
            break;
        }
        case 'ls': {
            if (cmd_arr.length == 1) {
                gen_response (cmd_ls (cmd_pwd ()));
            } else if (cmd_arr.length == 2) {
                gen_response (cmd_ls (cmd_arr[1]));
            } else {
                var i = 0;
                for (i = 1; i < cmd_arr.length - 1; i++) {
                    gen_response (cmd_arr[i] + ':');
                    gen_response (cmd_ls (cmd_arr[i]));
                    Term.term.innerHTML += '<br/>';
                }
                gen_response (cmd_arr[i] + ':');
                gen_response (cmd_ls (cmd_arr[i]));
            }
            break;
        }
        case 'clear': {
            Term.term.innerHTML = "";
            return;
        }
        case 'whoami': {
            gen_response ('guest');
            break;
        }
        case 'cd': {
            if (cmd_arr.length == 1) {
                Term.pwd = ['home', 'guest'];
                break;
            }
            var cur_elem = resolve_path_to_dir_elem (cmd_arr[1]);
            if (cur_elem != undefined && cur_elem['type'] == 'dir') {
                Term.pwd = get_full_cleaned_path_arr (cmd_arr[1]);
            } else {
                gen_response ('cd: no such file or directory: ' + cmd_arr[1]);
            }
            break;
        }
        default: {
            var cur_elem = null;
            if (cmd[0] == '.' || cmd[0] == '~' || cmd[0] == '/') {
                cmd = get_full_path (cmd);
            } 
            cur_elem = resolve_path_to_dir_elem (cmd);
            if (cur_elem == undefined) {
                gen_response ('command not found: ' + cmd_arr[0]);
                break;
            }
            if (cur_elem['type'] == 'link') {
                window.open (cur_elem['url'], "_self");
            } else {
                gen_response ('cannot open: ' + cmd);
            }
        }
    }
    Term.term.innerHTML += '<br/>';
}

function onkeypress (e) {
    if (e.keyCode == 13) { // return
        e.preventDefault ();
        var command = Term.cur_cmd.innerText.trim ();
        exec_cmd (command);
        Term.history.unshift (command);
        if (Term.history.length >= 20) {
            Term.history = term.history.slice (1,);
        }
        Term.hist_level = -1;
        refresh_prompt ();
    } else if (e.keyCode == 38) { // up
        if (Term.hist_level < Term.history.length - 1) {
            Term.hist_level += 1;
            Term.cur_cmd.innerText = Term.history[Term.hist_level];
        }
    } else if (e.keyCode == 40) { // down
        if (Term.hist_level > 0) {
            Term.hist_level -= 1;
            Term.cur_cmd.innerText = Term.history[Term.hist_level];
        } else if (Term.hist_level == 0) {
            Term.hist_level = -1;
            Term.cur_cmd.innerText = "";
        }
    } else if (e.keyCode == 9) { // tab
        e.preventDefault ();
    } else {
        //console.log (e.keyCode);
    }
}

function init_term() {
    document.addEventListener ('keydown', onkeypress, false);
    Term.cur_cmd.setAttribute ('contenteditable', 'true');
    Term.cur_prompt.children[0].innerHTML = get_pwd ();
    focus_on_term ();
}

window.onfocus = function () { focus_on_term (); }
document.onclick = function () { focus_on_term (); }

init_term ();
