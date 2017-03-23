import os

MEMBER_DETAIL_LOCATION = "../docs/members"
MEMBER_LIST_LOCATION = "../docs/members.md"

files = os.listdir(MEMBER_DETAIL_LOCATION)
member_list_file = open(MEMBER_LIST_LOCATION, "w")
member_list_file.write("# List of all Members\n\n")
for file_name in files:
    member_name = file_name.strip(".md").replace("-", " ").title()
    member_link_line = "* " + "[" + member_name + "]" \
                       + "(member/" + file_name + ")" + "\n"
    member_list_file.write(member_link_line)

member_list_file.close()

